import { useDispatch, useSelector } from 'react-redux';
import { TableTh, TableTd, BtnDel } from './ConstactList.styled';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  return (
    <table>
      <TableTh>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th></th>
        </tr>
      </TableTh>
      <tbody>
        {contacts.map(({ name, phone, id }) => {
          return (
            <tr key={id}>
              <TableTd>{name}</TableTd>
              <TableTd>{phone}</TableTd>
              <TableTd>
                <BtnDel
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </BtnDel>
              </TableTd>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
