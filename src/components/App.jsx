import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container } from './Container.styled';
import { Title, Contacts } from './Title.styled';


const App = () => {
  
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')

const handleAddContactClick = obj => {
    const newObj = {
      id: nanoid(),
      ...obj,
    };
    console.log(obj);
    console.log(newObj);

    const existContact = contacts.find(contact =>
      contact.name.toLowerCase().includes(newObj.name.toLowerCase())
    );
// console.log(existContact);
    setContacts(prevState => {
      if (existContact) {
        return alert(`Contact ${newObj.name} already exist`);
      }
      console.log(contacts);
      return [...prevState, newObj];
     
    });
  console.log(newObj);
  };
  const handleFilterContact = e => {
    setFilter( e.target.value );
  };
  const handleDelete = id => {
   setContacts(prev => prev.id !== id)
  };

  const filterNormalize = filter.toLowerCase();
  // console.log(filterNormalize);
    const visibleContacst = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
  );
  console.log(visibleContacst);
return (
      <Container>
        <Title>PHONEBOOK</Title>
        <ContactForm handleAddContact={handleAddContactClick} />

        <Contacts>CONTACTS</Contacts>
        <Filter
          handleFilterContact={handleFilterContact}
          name="filter"
          value={filter}
        />
        <ContactList
          handleDelete={handleDelete}
          visibleContacst={visibleContacst}
        />
      </Container>
    );

}





// class AppOld extends Component {
//   state = {
//     contacts: [
//       // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem('contacts'));
//     if (contacts && contacts.length > 0) {
//       this.setState({ contacts });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts.length !== this.state.contacts.length) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }
//   handleAddContactClick = obj => {
//     const newObj = {
//       id: nanoid(),
//       ...obj,
//     };
//     console.log(obj);
//     console.log(newObj);

//     const existContact = this.state.contacts.find(contact =>
//       contact.name.toLowerCase().includes(newObj.name.toLowerCase())
//     );

//     this.setState(prevState => {
//       if (existContact) {
//         return alert(`Contact ${newObj.name} already exist`);
//       }
//       return { contacts: [...prevState.contacts, newObj] };
//     });
//   };
//   handleFilterContact = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };
//   handleDelete = id => {
//     this.setState({
//       contacts: this.state.contacts.filter(contatc => contatc.id !== id),
//     });
//   };

//   render() {
//     const filterNormalize = this.state.filter.toLowerCase();
//     const visibleContacst = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filterNormalize)
//     );
//     return (
//       <Container>
//         <Title>PHONEBOOK</Title>
//         <ContactForm handleAddContact={this.handleAddContactClick} />

//         <Contacts>CONTACTS</Contacts>
//         <Filter
//           handleFilterContact={this.handleFilterContact}
//           name="filter"
//           value={this.state.filter}
//         />
//         <ContactList
//           handleDelete={this.handleDelete}
//           visibleContacst={visibleContacst}
//         />
//       </Container>
//     );
//   }
// }

export default App;
