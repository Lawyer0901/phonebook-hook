import { List, Items, Button } from './ContactList.styled';

const ContactList = ({ visibleContacst, handleDelete }) => {
    console.log(visibleContacst);
  return (
    <List>
      {visibleContacst.length ? (
      
        visibleContacst.map(contact => {
          return (
            <Items key={contact.id}>
              <span>{contact.name}</span> <span>{contact.number}</span>
              <Button onClick={() => handleDelete(contact.id)}>Delete</Button>
            </Items>
          );
        })
      ) : (
        <p>There is no contacts</p>
      )}
    </List>
  );
};

export default ContactList;

// visibleContacst.map(contact => {
//   return (
//     <Items key={contact.id}>
//       <span>{contact.name}</span> <span>{contact.number}</span>
//       <Button onClick={() => handleDelete(contact.id)}>Delete</Button>
//     </Items>
//   );
// });
