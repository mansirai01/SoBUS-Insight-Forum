import React from 'react'

export const Chatbot = () => {
  return (
    <div>
        <div id="container" className="container">
      
		<div id="chat" className="chat">
			<div id="messages" className="messages"></div>
			<input id="input" type="text" placeholder="Say something..." autocomplete="off" autofocus="true" />
		</div>
		<img src="bot.png" alt="Robot cartoon" height="500vh"/>
	</div>
    </div>
  )
}
