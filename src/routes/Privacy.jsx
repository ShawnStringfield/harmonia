export default function Privacy() {
  return (
    <>
      <section className='container mx-auto mb-32'>
        <h1 className='text-center'>Privacy Policy</h1>
      </section>
      <section className='container mx-auto mb-16'>
        <h2 className='mb-4'>Introduction</h2>
        <p>
          Harmonia Connect we are committed to protecting your privacy and ensuring that your personal information is
          handled in a safe and responsible manner. This Privacy Policy outlines the types of personal data we collect,
          how we use and protect that data, and your rights regarding your personal information.
        </p>
      </section>
      <section className='container mx-auto mb-16'>
        <h2 className='mb-4'>Information We Collect</h2>
        <p className='mb-4'>
          We collect various types of personal information through our website and services, including but not limited
          to:
        </p>
        <ul>
          <li className='list-decimal list-inside mb-4'>
            Personal Identification Information{' '}
            <ul className='list-disc pl-10'>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Mailing Address</li>
              <li>Job Title/Occupation</li>
            </ul>
          </li>
          <li className='list-decimal list-inside mb-4'>
            Application and Membership Information{' '}
            <ul className='list-disc pl-10'>
              <li>
                Information provided in your membership application, such as your interests, background, and reasons for
                joining Harmonia Connect.
              </li>
              <li>Details of your participation in our programs and activities.</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className='container mx-auto mb-16'>
        <h2 className='mb-4'>How We Use Your Information</h2>
        <p className='pb-4'>We use your personal information for the following purposes:</p>
        <ul>
          <li className='list-decimal list-inside mb-4'>
            Membership Management{' '}
            <ul className='list-disc pl-10'>
              <li>Reviewing and processing membership applications.</li>
              <li>Communicating with members regarding their participation and engagement with Harmonia Connect.</li>
              <li>Providing access to member-exclusive resources, platforms, and events.</li>
            </ul>
          </li>
          <li className='list-decimal list-inside mb-4'>
            Communication{' '}
            <ul className='list-disc pl-10'>
              <li>Sending updates, newsletters, and other communications relevant to our mission and activities.</li>
              <li>Responding to your inquiries, feedback, and support requests.</li>
            </ul>
          </li>
          <li className='list-decimal list-inside mb-4'>
            Compliance and Legal Obligations{' '}
            <ul className='list-disc pl-10'>
              <li>Ensuring compliance with legal requirements and protecting our legal rights.</li>
              <li>Preventing and addressing fraud, misuse, and other unlawful activities.</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className='container mx-auto mb-16'>
        <h2 className='mb-4'>How We Protect Your Information</h2>
        <p className='pb-4'>
          We take the security of your personal information seriously and implement appropriate technical and
          organizational measures to safeguard it, including:
        </p>
        <ul className='list-disc list-inside'>
          <li>
            <strong>Data Encryption:</strong> Encrypting data during transmission and at rest to protect it from
            unauthorized access.
          </li>
          <li>
            <strong>Access Controls:</strong> Restricting access to personal information to authorized personnel only.
          </li>
          <li>
            <strong>Regular Audits:</strong> Conducting regular security audits and assessments to identify and mitigate
            potential vulnerabilities.
          </li>
        </ul>
      </section>
      <section className='container mx-auto'>
        <h2 className='mb-4'>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We
          will notify you of significant changes by posting the updated policy on our website or through other
          communication channels.
        </p>
      </section>
    </>
  );
}
