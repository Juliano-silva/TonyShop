import { createClient } from 'contentful'
import Conteúdo from '../components/Conteúdo'
export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "skates" })

  return {
    props: {
      skate: res.items,
    }
  }
}

export default function Recipes({ skate }) {
  console.log(skate)
  return(
    <div>
       {skate.map((skates) => (
       //Aqui eu peguei o titulo
       <Conteúdo key={skates.sys.id} skate={skates}/>
     ))}
    </div>
  )
}