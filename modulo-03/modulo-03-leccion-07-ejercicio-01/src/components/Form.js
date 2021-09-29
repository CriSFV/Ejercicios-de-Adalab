import InputGroupSelect from './InputGroupSelect';
import InputGroupText from './InputGroupText ';

const Form = (props) => {
  return (
    <form className='form'>
      <h2>Rellena tus datos para finalizar la compra:</h2>
      <div className='form'>
        {/* name */}
        <InputGroupText
          labelText=' Escribe un nombre:'
          inputName={props.InputName}
          inputId='name'
          inputPlaceHolder='María García'
          inputValue={props.InputName}
          handleChange={props.handleChangeName}
        />
        <InputGroupText
          labelText=' Escribe un email:'
          inputName={props.inputEmail}
          inputId='email'
          inputPlaceHolder='mariagarcia@gmail.com'
          inputValue={props.inputEmail}
          handleChange={props.handleChangeEmail}
        />
        {/* <InputGroupSelect /> */}
        {/* region */}
        <div className='input-group-select'>
          <label className='label-text' htmlFor='region'>
            Indica tu región:
          </label>
          <select
            className='input-select'
            name='region'
            id='region'
            value={props.region}
            onChange={props.handleRegion}
          >
            <option>España peninsular</option>
            <option>Islas Canarias</option>
            <option>Islas Baleares</option>
            <option>Ceuta</option>
            <option>Melilla</option>
          </select>
        </div>

        {/* payment type */}
        <label className='label-text'>Indica tu método de pago:</label>

        <div className='input-group-radio'>
          <label className='label-radio' htmlFor='creditCard'>
            Tarjeta de crédito
          </label>
          {/* Este radio solo debe aparecer activo cuando paymentType sea creditCard */}
          <input
            type='radio'
            name='paymentType'
            id='creditCard'
            value='creditCard'
            checked={props.paymentType === 'creditCard'}
            onChange={props.handlePaymentType}
          />
        </div>

        <div className='input-group-radio'>
          <label className='label-radio' htmlFor='cash'>
            Efectivo
          </label>
          {/* Este radio solo debe aparecer activo cuando paymentType sea cash */}
          <input
            type='radio'
            name='paymentType'
            id='cash'
            value='cash'
            checked={props.paymentType === 'cash'}
            onChange={props.handlePaymentType}
          />
        </div>

        <div className='input-group-radio'>
          <label className='label-radio' htmlFor='cashOnDelivery'>
            Contra reembolso
          </label>
          {/* Este radio solo debe aparecer activo cuando paymentType sea cashOnDelivery */}
          <input
            type='radio'
            name='paymentType'
            id='cashOnDelivery'
            value='cashOnDelivery'
            checked={props.paymentType === 'cashOnDelivery'}
            onChange={props.handlePaymentType}
          />
        </div>

        {/* legal terms */}
        <div className='input-group-checkbox'>
          <label className='label-check' htmlFor='legalTerms'>
            Debes aceptar nuestros términos legales para completar la compra:
          </label>
          {/* Este radio solo debe aparecer activo cuando legalTerms sea true */}
          <input
            type='checkbox'
            name='legalTerms'
            id='legalTerms'
            checked={props.legalTerms}
            onChange={props.handleLegalTerms}
          />
        </div>
      </div>
    </form>
  );
};
export default Form;
