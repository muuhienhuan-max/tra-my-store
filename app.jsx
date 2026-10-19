background: "#f8f9fa",
          borderRadius: "10px"
        }}>
          <h2>🛒 Giỏ hàng của bạn</h2>

          {cart.length === 0 ? (
            <p>Giỏ hàng đang trống.</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <p key={index}>
                  {item.name} - {item.price.toLocaleString("vi-VN")} đ
                  <button
                    onClick={() => setCart(cart.filter((_, i) => i !== index))}
                    style={{ marginLeft: "10px" }}
                  >
                    Xóa
                  </button>
                </p>
              ))}
              <h3>Tổng tiền: {total.toLocaleString("vi-VN")} đ</h3>
              <button onClick={() => alert("Vui lòng liên hệ cửa hàng để đặt hàng.")}>
                Đặt hàng
              </button>
            </>
          )}
        </section>

        <section id="contact" style={{ marginTop: "30px" }}>
          <h2>Liên hệ</h2>
          <p>TRA MY STORE - Cảm ơn quý khách đã mua sắm!</p>
        </section>
      </main>

      <footer style={{
        background: "#087f5b",
        color: "white",
        textAlign: "center",
        padding: "20px"
      }}>
        © 2026 Tra My Store
      </footer>
    </div>
  );
}
