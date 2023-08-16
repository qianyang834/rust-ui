import { render } from '@testing-library/vue'
import NewTree from '../src/newTree'

describe('newTree test', () => {
  test('newTree init render', async () => {
    const { getByRole } = render(NewTree)
    getByRole('newTree')
  })
})
