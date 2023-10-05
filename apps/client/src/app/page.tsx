import Header from '@/components/Header';
import NavbarFrends from '@/components/NavbarFrends';

const Page = () => {
  return (
    <>
      <NavbarFrends />
      <div className="flex flex-1 flex-col">
        <Header />
        <div className="flex flex-1">
          <main className="flex-1" />
          <aside className="w-[340px] bg-slate-900">a</aside>
        </div>
      </div>
    </>
    // <AppShell
    //   header={{ height: 32 }}
    //   navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
    //   padding="md"
    // >
    //   <AppShell.Header />
    //   <AppShell.Navbar className="max-w-xs">Navbar</AppShell.Navbar>
    //   <AppShell.Main>
    //     <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
    //   </AppShell.Main>
    // </AppShell>
  );
};

export default Page;
