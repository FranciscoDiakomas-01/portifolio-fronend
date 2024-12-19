
export default function NavObserver(setActive) {

    const Oberser1 = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            setActive(0);
            return
        }
        
    });
    Oberser1.observe(document.getElementById("home"));
    const Oberser2 = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setActive(1);
        return;
      }
    });
    Oberser2.observe(document.getElementById("aboutme"));
    const Oberser3 = new IntersectionObserver((entries) => {
     if (entries[0].isIntersecting) {
       setActive(2);
       return;
     }
    });
    Oberser3.observe(document.getElementById("services"));

    const Oberser4 = new IntersectionObserver((entries) => {
     if (entries[0].isIntersecting) {
       setActive(3);
       return;
     }
    });
    Oberser4.observe(document.getElementById("skills"));

    
    const Oberser5 = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setActive(4);
        return;
      }
    });
    Oberser5.observe(document.getElementById("projects"));
}