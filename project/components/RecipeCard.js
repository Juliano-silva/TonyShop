export default function RecipeCard({ skates }) {
  const { title } = skates.fields.title

  return (
    <div className="card">
      <div className="featured">
        {/* featured image */}
      </div>
      <div className="content">
        <div className="info">
          <h4>{ title }</h4>
        </div>
      </div>
    </div>
  )
}