/** Default layout */
export const MainLayout = (props : any) =>  {
    return (
      <div className="main-layout">
        {props.children}
        <footer />
      </div>
    );
}

/** Empty layout */
export const EmptyLayout = (props: any) => {
    return (
      <div className="empty-layout">
        {props.children}
      </div>
    );
}