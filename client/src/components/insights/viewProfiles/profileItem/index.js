import React from 'react';
import { Card, CardMedia, CardTitle, CardText, RaisedButton } from 'material-ui';

const viewProfileItem = () => {
  return (
    <Card
      label={'Graph'}
    >
      <CardText>
        <section>
          <img src={'../../../../styles/img/industry_logo_no_text.png'} alt="Industry Logo" />
        </section>
        <section >
         User Name
        </section>
        <section>
          <RaisedButton label="View" fullWidth />
        </section>
      </CardText>
    </Card>
    );
};

export default viewProfileItem;
