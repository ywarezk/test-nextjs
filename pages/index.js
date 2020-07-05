
export default function Home() {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            
          </li>
        </ul>
      </nav>
      <h1>hello next</h1>
    </div>
  )
}

export async function getStaticProps() {
  console.log('getStaticProps');
  const res = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
  const tasks = await res.json();
  return {
    props: {tasks}
  };
}
