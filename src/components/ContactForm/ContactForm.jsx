import {  useState } from 'react';
import { Form, Button, Label, Input } from './ContactForm.styled';


const ContactForm = ({handleAddContact}) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleChange = e => {
    const { name, value } = e.target;
   switch (name) {
     case 'name':
    setName(value)
       break
  case 'number':
    setNumber(value)
    break
    default:
   return
}
  };

 const handleAddContactClick = e => {
    e.preventDefault();
    // console.log(this.state);
    // const obj = {
    //   name: this.state.name,
    //   number: this.state.number,
    // };
   handleAddContact({name, number});
    setName('');
    setNumber('');

    // return obj;
  };

  return (
      <Form onSubmit={handleAddContactClick}>
        <Label>
          <span>Name</span>
          <Input
            type="text"
            placeholder="Enter contact name"
            autoComplete="off"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </Label>
        <br />
        <Label>
          <span>Number</span>
          <Input
            type="tel"
            placeholder="Enter contact number"
            autoComplete="off"
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </Label>
        <Button type="sunmit">Add Contact</Button>
      </Form>
    );
}






// class ContactFormOld extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };
//   handleAddContactClick = e => {
//     e.preventDefault();
//     // console.log(this.state);
//     // const obj = {
//     //   name: this.state.name,
//     //   number: this.state.number,
//     // };
//     this.props.handleAddContact(this.state);
//     this.setState({ name: '', number: '' });

//     // return obj;
//   };
//   render() {
//     return (
//       <Form onSubmit={this.handleAddContactClick}>
//         <Label>
//           <span>Name</span>
//           <Input
//             type="text"
//             placeholder="Enter contact name"
//             autoComplete="off"
//             value={this.state.name}
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleChange}
//           />
//         </Label>
//         <br />
//         <Label>
//           <span>Number</span>
//           <Input
//             type="tel"
//             placeholder="Enter contact number"
//             autoComplete="off"
//             value={this.state.number}
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.handleChange}
//           />
//         </Label>
//         <Button type="sunmit">Add Contact</Button>
//       </Form>
//     );
//   }
// }

export default ContactForm;
