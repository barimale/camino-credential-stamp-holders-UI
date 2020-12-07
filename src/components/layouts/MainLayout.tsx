import { Header } from '../Header';
import { Footer } from '../Footer';

export const MainLayout = (props : any) =>  {
    return (
    <>
        <Header />
        <div className="main-layout" style={{
            height: '85vh',
            width: '90vw',
            display: 'inline-flex',
            justifyContent: 'center',
            border: '1px solid black'}}>
        {props.children}
        </div>
        <Footer/>
    </>
    );
}

export const ContentLayout = (props: any) => {
    return (
      <div style={{
          border: '1px solid black',
          height: 'inherit',
          width:'inherit',
          display: 'inline-flex',
          alignItems: 'center', 
          justifyContent: 'center'}}>
        {props.children}
      </div>
    );
}