import { loadScript } from '../../lib/load-script'

async function loadIntegration(name: string, params: any) {
  if (params) console.log(params, name)

  const path = 'https://scripts.attributionapp.com/v3'
  const fullPath = `${path}/${name}.js`

  try {
    await loadScript(fullPath)
  } catch (err) {
    console.log(err)
  }
}

export function addAtbIntegrations(integrations: any) {
  Object.keys(integrations).forEach(async (key) => {
    const params = integrations[key]
    await loadIntegration(key, params)
  })
}
