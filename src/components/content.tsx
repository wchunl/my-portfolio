import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


export default function Content() {

  const sectionPadding: React.CSSProperties = {
    padding: '100px 200px',
  };

  return (
    <section>
      <Container style={sectionPadding} className='m-auto justify-content-center'>

            <h1 className='text-center'>Hello, world!</h1>
            <p>
              This is a simple description
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
      </Container>
    </section>
  );
}