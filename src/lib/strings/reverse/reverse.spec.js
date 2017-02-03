import reverse from './reverse';

const expect = require('chai').expect;

describe('strings :: reverse tests', () => {
  it('should be \'egabbaB selrahC\'', () => {
    expect(reverse('Charles Babbage')).to.equal('egabbaB selrahC');
  });

  it('should be \'artskjiD .W regsdE\'', () => {
    expect(reverse('Edsger W. Dijkstra')).to.equal('artskjiD .W regsdE');
  });
});
