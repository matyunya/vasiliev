import React, { Component } from 'react'
import { IndexLink } from 'react-router'

class About extends Component {
    render () {
      return (
        <div className="container">
          <h3>Список литературы</h3>
          <ol>
            <li>Анатолий Васильев, Зара Абдуллаева. «Параутопия», с. 279-297.</li>
            <li>П.Б. Богданова. «Анатолий Васильев: на пути к методу».</li>
            <li>Э.Е. Платонова. Культурология, с.662.</li>
            <li>М.Н. Эпштейн. «Постмодерн в русской литературе», с.85</li>
          </ol>

          <a target="_blank" href="https://www.youtube.com/watch?v=JJTQeahfbOY">Спектакль целиком</a>
          <br/>
         <IndexLink to='/'>
              В начало
         </IndexLink>

        </div>
  )
    }
}

export default About