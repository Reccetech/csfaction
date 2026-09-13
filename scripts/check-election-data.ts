import assert from 'node:assert/strict';
import {
  activeCandidates,
  candidates,
  electionRegions,
  getElectionPhase,
} from '../src/content/candidates.ts';

const regionIds = new Set(electionRegions.map((r) => r.id));

for (const c of candidates) {
  assert.ok(regionIds.has(c.regionId), `${c.id} has unknown region ${c.regionId}`);
}

const billy = candidates.find((c) => c.id === 'billy-quesnel');
assert.equal(billy?.regionId, 'vallee-fraser');
assert.notEqual(billy?.withdrawn, true);

const tahir = candidates.find((c) => c.id === 'abdel-tahir');
assert.equal(tahir?.withdrawn, true);
assert.ok(!activeCandidates.some((c) => c.id === 'abdel-tahir'));

assert.equal(activeCandidates.filter((c) => c.regionId === 'sud-est').length, 0);

assert.equal(getElectionPhase(new Date('2026-09-13T12:00:00-07:00')), 'before');
assert.equal(getElectionPhase(new Date('2026-09-16T12:00:00-07:00')), 'open');
assert.equal(getElectionPhase(new Date('2026-10-17T20:00:01-07:00')), 'closed');

console.log('election-data checks passed');
