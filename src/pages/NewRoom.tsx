import {Link} from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function NewRoom() {

    const {user} = useAuth()

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
                <h1>{user?.name}</h1>
                <h2 className="separator">Crear una nueva sala</h2>
                <form>
                    <input
                     type="text" 
                     placeholder="Nombre de la sala"
                     />
                     <Button type="submit">
                       Crear sala
                     </Button>
                </form>
                <p>Quiere entrar en una sala existente? <Link to="/">clique aqui</Link></p>
            </div>
        </main>
    </div>
    )
}