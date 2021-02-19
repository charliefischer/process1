"use strict";

describe('report', function() {
  let report;
  beforeEach(function(){
    report = new Report();
  })
  it('returns Green: 1 when input is Green', function() {
    expect(report.results('Green')).toEqual('Green: 1')
  })

  it('returns Amber: 1 when input is Amber', function() {
    
  })
})
