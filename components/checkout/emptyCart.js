export default function EmptyCart() {
  return (
    <section className="section offset-top" aria-labelledby="empty-cart">
      <style jsx>{`
        .container {
          background-color: var(--clr-neutral-50);
          border-radius: 9px;
        }
        #empty-cart {
          color: var(--clr-neutral-800);
          font-size: var(--fs-500);
          text-align: center;
        }
      `}</style>
      <div className="container">
        <h1 id="empty-cart">You haven't selected any products.</h1>
        <div className="product-cards">sum fuckin products shit</div>
      </div>
    </section>
  );
}
