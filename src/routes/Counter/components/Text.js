import React, { Component } from 'react'

class Text extends Component {
    static propTypes = {
      className: React.PropTypes.string.isRequired,
      i: React.PropTypes.number.isRequired
    };

    render () {
      const headers = ['15 февраля, воскресенье, 1987 год', '15 февраля, воскресенье', '24 февраля, вторник', '27 февраля, пятница', '27 февраля, пятница']
      const texts = ['Васильев: Все должно носить характер свободной, нерегламентированной деятельности вокруг спектакля. Должна настроиться вольная творческая ситуация. Весь объем работы предлагается для того, чтобы уйти от непосредственного изготовления спектакля, чтобы восстановить художественную среду, атмосферу автора, связанную со свежим чувством. ',
      'Васильев: Быть обнаженным, войти обнаженным в историю и обнаженным обрести истину. Персонажам дана ядерная энергия жизни в утробе художественного произведения, в ядре зачат весь смысл театра, в который сам автор не верит, но эту пьесу допишут персонажи.',
      'Васильев: Атмосфера второго акта — салон. Джаз так и возник: по ночам в клубах, публичных кафе собирались черные музыканты и всю ночь играли. Случай в художественном творчестве играет огромную роль. Советская публика привыкла к репертуарному театру, все люди существуют оборонительно. Не вы должны приходить к публике, а она к вам. В «Шести персонажах» сильный рассказ о некоем ни одним законом не узаконенном поведении действующих лиц. Это рассказ о правах на незаконное владение. Есть разные формы художественного творчества: правильного — узаконенного, и неправильного — не узаконенного. Просто нужно перейти в другую систему связей. Диалог приобретает характер просветления, почти сумасшествия...',
      'Васильев: Второй акт сделан на приеме этюда. Этюд — это внутреннее движение, актер ведет роль в том объеме, который ему дается, располагаясь внутри этого объема как тело. В нашем случае в этюд заключена и провокация, поэтому я говорю о хеппенинге. Зрители принимают участие в этюдах-провокациях и испытывают их на себе.',
      'Васильев: Разъезжаемся, премьера сыграна! Вы для меня уже не студенты, а актеры, с которыми я поставил спектакль, и теперь он принадлежит вам и театру. Мне хотелось бы, чтобы вы внутренне научились определять, когда вещь играется — когда нет, чтобы какое-то чутье воспитывалось и к нему можно было возвращаться. И не по памяти ума.']
      const more = ['По Васильеву неверно просто взять пьесу, распределить актеров и выпустить спектакль. «Надо брать темы и выдумывать множество никому ненужных работ, — говорит режиссер, — а внутри этих репетиций на тему искать единственный вариант будущего представления. Когда театр научится не жалеть потерянного времени и, подобно художнику в мастерской, привыкнет к образам не для любителей салонов и выставок, — можно будет как-то надеяться на живые вещи. Иначе что же мы имеем — лишь застывшие философии в застывших формах».',
      'Обнажение напрямую связано с вопросом, как убрать зазор между персонажем и актером, который его играет, и хорошо объясняется следующим примером. Представьте, что два незнакомых человека случайно встречаются за границей, и один помогает второму с обменом валюты. Позже человек, который обменивал деньги, видит, что купюры фальшивые. Он возвращается и, конечно, не находит обманщика. Можно ли сыграть это на сцене? Чем отличается реальность реального от реальности сценической? «Лишь единственным обстоятельством, — отвечает Васильев. — В реальной реальности тот, кто обменивает, не знает, что он будет обманут, а в сценической реальности оба участника об этом знают, и это очень существенное различие. Преодолеть это знание никакой техникой невозможно. Как бы вы себя ни обманывали, вы не сможете затуманить себе сознание. Ответ прост: персонаж не знает, потому что персонаж — продукт литературного текста, а актер — материал сценического текста, это не одно и то же. С помощью этого разграничения убирается зазор между персонажем и актером».',
      '',
      'Анатолий Васильев — ученик Марии Кнебель, актрисы Художественного театра, которая в свою очередь училась у Станиславского и Михаила Чехова. Он прямой потомок создателей школы психологического реализма, которая в советской действительности в терминологии Васильева стала «театром борьбы». По-своему деконструируя традицию психологического театра, он сделал предметом своего изучения иррациональность личности человека, которая формируется врожденным характером, инстинктами, воспитанием, детскими травмами, тоталитарной средой и другими обстоятельствами.',
      'Васильев неслучайно «отдает» спектакль актерам и театру, намекая на отсутствие, «смерть автора». Его выраженная художественная позиция, новаторство, собственный стиль и язык — черты культуры модерна, которые он замешивает с ощущением нелогичности мира, подверженного, по его словам, «не собственной логике, а внутренней конфликтной логике человека». В спектаклях, созданных Васильевым в 80-х, появляется и постмоденистская игра со стилями. «Взрослая дочь молодого человека», «Серсо» и «Шесть персонажей в поисках автора» — это спектакли-коллажи, собранные из разных жанров и стилей для поиска «человека играющего», чтобы сделать игру основой и целью творчества.']

      return (
         <div className="text-container">
            <div className={this.props.className}>
              <p><b>{headers[this.props.i]}</b></p>
              <br/>{texts[this.props.i]} <More text={more[this.props.i]} i={this.props.i} />
            </div>
          </div>
  )
    }
}

class More extends Component {
  constructor(props) {
    super(props);
    this.state = {className: "hidden"};
  }

  componentWillUpdate(nextProps) {
    if (nextProps.text !== this.props.text) {
      this.setState({className: "hidden"});
    }
  }

  _switch(e) {
    e.preventDefault();
    this.setState({className: this.state.className === "visible" ? "hidden" : "visible"})
  }

  render() {
    return (<span>
      {this.props.i !== 2 && <a className="more" onClick={(e) => this._switch(e)}>→</a>}
      {this.props.i === 0 && <p><small>Чтобы продолжить просмотр, нажмите на любое место на экране.</small></p>}
      <br/><span className={this.state.className}>{this.props.text}</span>
    </span>
    )
  }
}

export default Text