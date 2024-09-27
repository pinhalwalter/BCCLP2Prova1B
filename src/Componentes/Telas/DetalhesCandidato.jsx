import { Container, Button, Image } from "react-bootstrap";

export default function DetalhesCandidato({ candidato, voltar }) {
    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            <Image src={candidato.avatar} rounded height="300" width="300" />
            <h2>{candidato.nome}</h2>
            <p>Email: {candidato.email}</p>
            <h3>Propostas</h3>
            <ul>
                {candidato.propostas.map((proposta, index) => (
                    <li key={index}>{proposta}</li>
                ))}
            </ul>
            <Button onClick={voltar} variant="secondary">Voltar</Button>
        </Container>
    );
}
