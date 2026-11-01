<script>
  /* ============ YAHAN APNI COVER IMAGES KE PATH DALEIN ============
     28 images = 4 rows x 7 columns
     Example: 'img/cover1.jpg'  (apne project ke folder ka path)
     Abhi demo ke liye site ki images laga rakhi hain.               */
  const S = 'https://theghostwritingworld.com/wp-content/uploads/';
  const images = [
    // row 1
    S+'2025/05/home1-counter-img1.webp',
    S+'2025/05/home1-counter-img2.webp',
    S+'2025/05/home1-counter-img3.webp',
    S+'2025/05/home1-counter-img4.webp',
    S+'2025/05/home1-highlight1.jpg',
    S+'2025/05/home1-highlight2.jpg',
    S+'2025/05/home1-highlight3.jpg',
    // row 2
    S+'2025/07/post-grid-1-800x800.jpg',
    S+'2025/07/post-grid-2-800x800.jpg',
    S+'2025/07/post-grid-3-800x800.jpg',
    S+'2025/07/post-grid-4-800x800.jpg',
    S+'2025/07/post-grid-5-800x800.jpg',
    S+'2025/07/post-grid-6-800x800.jpg',
    S+'2025/05/home1-author-img1.webp',
    // row 3
    'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=500&q=80',
    // row 4
    S+'2025/06/home1-team-img1-min-450x450.png',
    S+'2025/06/home1-team-img2-min-450x450.png',
    S+'2025/06/home1-team-img3-min-450x450.png',
    S+'2025/06/home1-team-img4-min-450x450.png',
    S+'2025/06/home3-author-4-450x450.png',
    S+'2025/06/home3-author-5-450x450.png',
    S+'2025/06/home3-author-2-450x450.png'
  ];

  const grid = document.getElementById('grid');
  images.forEach((src,i)=>{
    const cell = document.createElement('div');
    cell.className = 'col cell';
    cell.innerHTML = `<div class="cover" style="--i:${i}"><img src="${src}" alt="Book cover ${i+1}"></div>`;
    grid.appendChild(cell);
  });

  /* ============ SWAP ANIMATION (FLIP) ============ */
  const cells = () => [...grid.children];
  const COLS = () => innerWidth >= 992 ? 7 : innerWidth >= 768 ? 4 : 3;

  function swap(a, b){
    if(a === b) return Promise.resolve();
    const list = cells();
    const A = list[a], B = list[b];
    const ca = A.firstElementChild, cb = B.firstElementChild;
    const ra = A.getBoundingClientRect(), rb = B.getBoundingClientRect();

    A.appendChild(cb); B.appendChild(ca);   // covers ki jagah badli

    const dxA = ra.left - rb.left, dyA = ra.top - rb.top;
    const dxB = rb.left - ra.left, dyB = rb.top - ra.top;

    const fly = (el, dx, dy, dir) => {
      el.classList.add('flying');
      const anim = el.animate([
        { transform:`translate(${dx}px, ${dy}px) scale(1) rotate(0)` },
        { transform:`translate(${dx*0.5}px, ${dy*0.5 - 40}px) scale(1.18) rotate(${dir*6}deg)`, offset:.5 },
        { transform:'translate(0,0) scale(1) rotate(0)' }
      ], { duration:1100, easing:'cubic-bezier(.65,0,.25,1)' });
      return anim.finished.then(()=>el.classList.remove('flying'));
    };
    [ca,cb].forEach(e=>{ e.style.animation='none'; e.style.opacity=1; });
    return Promise.all([ fly(ca, dxA, dyA, 1), fly(cb, dxB, dyB, -1) ]);
  }

  const rnd = n => Math.floor(Math.random()*n);
  const wait = ms => new Promise(r=>setTimeout(r, ms));

  async function loop(){
    await wait(1800);
    await swap(0, COLS() + 2);          // 1st swap: row 1 ki pehli image -> row 2 ki 3rd position

    while(true){
      await wait(1400);
      if(document.hidden) continue;
      const n = images.length, cols = COLS();
      const pairs = Math.random() < .4 ? 2 : 1;
      const used = new Set(), jobs = [];
      for(let k=0;k<pairs;k++){
        let a,b,tries=0;
        do { a=rnd(n); b=rnd(n); tries++; }
        while((used.has(a)||used.has(b)||Math.floor(a/cols)===Math.floor(b/cols)) && tries<30);
        used.add(a); used.add(b); jobs.push(swap(a,b));
      }
      await Promise.all(jobs);
    }
  }
  loop();
</script>