import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Your Hub for Campus Trade！',
  description: 'Your Hub for Campus Trade!',
  keywords: 'campus, exchange, trade, school',
};

export default Meta;
