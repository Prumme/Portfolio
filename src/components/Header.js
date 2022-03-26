import ReactTypingEffect from 'react-typing-effect';
import '../styles/Header.css'

function Header() {
    return (<div>
        <h1 className='title'>Mon Portfolio</h1>
        <ReactTypingEffect
            text={["<h2>Aurélien Prudhomme</h2>", "echo Aurélien Prudhomme", "printf(\"Aurélien Prudhomme\");", "IO.inspect(\"Aurélien Prudhomme\")", "print(\"Aurélien Prudhomme\""]}
            speed={50}
            eraseSpeed={50}
            eraseDelay={500}
            typingDelay={500}
            cursorClassName="cursor"
            cursorRenderer={cursor => <h1>{cursor}</h1>}
            displayTextRenderer={(text, i) => {
                return (
                    <h2>
                        {text.split('').map((char, i) => {
                            const key = `${i}`;
                            return (
                                <span
                                    key={key}
                                    style={i % 1 === 0 ? { color: 'white' } : {}}

                                >{char}</span>
                            );
                        })}
                    </h2>
                );
            }}
        />
    </div>)
}

export default Header