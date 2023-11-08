/** @type {import('./$types').PageServerLoad} */
export async function load({fetch,  params }) {
	const response = await fetch(
    'http://127.0.0.1:8080/musicians/'
  )
  const currencies = await response.json()
  console.log(currencies)
  return {musicians: currencies}
}