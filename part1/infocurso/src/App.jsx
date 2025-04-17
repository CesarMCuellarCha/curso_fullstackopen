const Header = (curso)=>{
  
  return (
    <div>
      <h1>{curso.name.name}</h1>
    </div>
  )

}

const Part = (parte)=>{  
  return (
    <div>   
      <p>
        {parte.modulo} {parte.exercises}
      </p>
  </div>
  )

}

const Content = (partes)=>{  
  return (
    <div>   
      <Part modulo={partes.partes.parts[0].name} exercises={partes.partes.parts[0].exercises} />
      <Part modulo={partes.partes.parts[1].name} exercises={partes.partes.parts[1].exercises} />
      <Part modulo={partes.partes.parts[2].name} exercises={partes.partes.parts[2].exercises} />
    </div>
  )

}


const Total = (parte) =>{
  return (
    <div>   
      <p>Number of exercises {parte.partes.parts[0].exercises + parte.partes.parts[1].exercises + parte.partes.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course}/>
      <Content partes={course}/>
      <Total partes={course} />
    </div>
  )
}

export default App
