import { createServer } from 'vite';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const data = new Map(); const scripts = [];
  globalThis.localStorage = {getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v)};
  globalThis.window = {location:{origin:'https://www.clydralab.com',reload:()=>{window.reloaded=true}}};
  globalThis.document = {referrer:'https://www.google.com/search?q=private-query',createElement:()=>({}),head:{appendChild:e=>scripts.push(e)}};
  const mod = await server.ssrLoadModule('/src/seo/analytics.ts');
  mod.trackPage('/contact'); mod.trackEnquiry(); assert.equal(scripts.length,0);
  mod.setAnalyticsConsent(true); mod.trackPage('/contact'); mod.trackPage('/contact'); mod.trackPage('/services'); mod.trackEnquiry();
  assert.equal(scripts.length,1);
  const calls = window.dataLayer.map(x=>Array.from(x));
  const events = calls.filter(x=>x[0]==='event');
  assert.equal(events.filter(x=>x[1]==='page_view').length,2);
  assert.equal(events.filter(x=>x[1]==='generate_lead').length,1);
  assert(!JSON.stringify(calls).includes('private-query'));
  assert(calls.some(x=>x[0]==='config'&&x[2].send_page_view===false));
  mod.setAnalyticsConsent(false); const size=window.dataLayer.length; mod.trackPage('/about'); mod.trackEnquiry(); assert.equal(window.dataLayer.length,size); assert.equal(window.reloaded,true);
  const result={at:new Date().toISOString(),noRequestsBeforeConsent:true,singleTag:true,duplicatePageViewsPrevented:true,routeViews:2,leadEvents:1,noReferrerQuery:true,withdrawalStopsTracking:true,scope:'Isolated module stubs; no real analytics or EmailJS request'};
  await fs.writeFile('seo/evidence/analytics-tests.json',JSON.stringify(result,null,2)); console.log(JSON.stringify(result));
} finally { await server.close(); }
