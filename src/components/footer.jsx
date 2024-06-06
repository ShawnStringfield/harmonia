export const Footer = () => {
  return (
    <footer className='flex justify-between p-8 sm:p-16 mt-20 bg-footer bg-cover bg-top min-h-[400px]'>
      <div>Logo</div>
      <div>
        <ul className='flex space-x-4'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
};
