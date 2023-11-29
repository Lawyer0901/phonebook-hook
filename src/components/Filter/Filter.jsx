import { Form, Label, Input } from './Filter.styled';

const Filter = ({ handleFilterContact, name, value }) => {
  return (
    <Form>
      <Label>
        Finde contact by name
        <Input
          onChange={handleFilterContact}
          name={name}
          type="text"
          value={value}
          placeholder="Finde contact by name"
        />
      </Label>
    </Form>
  );
};

export default Filter;
