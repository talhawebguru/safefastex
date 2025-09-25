import React from 'react'
import NameBanner from '../components/about/NameBanner';
import GeneralForm from '../components/request-quote/GeneralForm';

const page = () => {
  // Define breadcrumbs for request quote page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Request a Quote" }
  ];
  
  return (
    <main>
      <NameBanner
        title="Request a Quote"
        backgroundImage="/images/nameBanner.jpg"
        breadcrumbs={breadcrumbs}
      />
      
      <GeneralForm />
    </main>
  )
}

export default page