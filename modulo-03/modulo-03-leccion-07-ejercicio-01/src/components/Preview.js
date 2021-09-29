const Preview = (props) => {
  // Funciones que nos ayudan a renderizar

  return (
    <div className={props.className}>
      <h2>Tus datos son:</h2>
      <ul>
        <li>Nombre: {props.name}</li>
        <li>Email: {props.email}</li>
        <li>Región: {props.region}</li>
        {/* <li>Método de pago: {renderPaymentTypeText()}</li> */}
        <li>
          Has aceptado nuestros términos legales:
          {props.legalTerms === true ? 'Sí' : 'No'}
        </li>
      </ul>
      {/* reset */}
      {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
      <input
        className='button'
        type='submit'
        value='Enviar'
        //disabled={props.isValidForm() === false}
      />

      {/* send */}
      <button
        className='button reset'
        //onClick={props.handleResetButton}
      >
        Limpiar el formulario
      </button>
    </div>
  );
};
export default Preview;
