import Contact from './Contact';

function ContactListApp() {
  const kontakte = [
    { id: 1, name: "Max Mustermann", email: "max@test.de", telefon: "0176 123456" },
    { id: 2, name: "Erika Musterfrau", email: "erika@test.de", telefon: "0151 987654" },
    { id: 3, name: "Stefan Brandt", email: "stefan@dev.de", telefon: "0160 555444" }
  ];

  return (
    <div>
      <h2>Meine Kontakte</h2>
      {kontakte.map(person => (
        <Contact 
          key={person.id} 
          name={person.name} 
          email={person.email} 
          telefon={person.telefon} 
        />
      ))}
    </div>
  );
}

export default ContactListApp;