import { MainFunc } from './main'

describe(('Main Unit Tests'), () => {
  it('Should MainFunc returns x as 12', () => {
    const sut = new MainFunc()

    expect(sut.x).toBe(12)
  })
})
