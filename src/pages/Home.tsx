import {useHistory} from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button';

import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth';

export function Home(){
    const history = useHistory();
    const {user, signInWithGoogle} = useAuth()

   async function handleCreateRoom(){
     if (!user) {
         await signInWithGoogle();
     }

        history.push('/rooms/new');
    }

    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustracion simbolizado preguntas y respuestas" />
                <strong>Crea salas de Q&amp;A en vivo</strong>
                <p>Tire as dividas da sua audiencia en tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo de Google" />
                        Cre su sala con Google
                    </button>
                    <div className="separator">entre en una salas</div>
                    <form>
                        <input
                         type="text" 
                         placeholder="Digite el codigo de la sala"
                         />
                         <Button type="submit">
                           Entrar a la sala
                         </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}