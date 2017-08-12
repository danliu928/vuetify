import { test } from '~util/testing'
import VExpansionPanel from '~components/expansion-panel/VExpansionPanel'

test('VExpansionPanel.js', ({ mount }) => {
  it('should render component and match snapshot', () => {
    const wrapper = mount(VExpansionPanel)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render an expanded component and match snapshot', () => {
    const wrapper = mount(VExpansionPanel, {
      propsData: {
        expand: true
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
