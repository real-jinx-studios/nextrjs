const stripe = require('stripe')('sk_test_51J6ChfFcRooXIbcM4refwej6kaT7UTxSh3iEJARXAPSzaYUSpgC3zSCztPmbpZOB1qGm45RCtQcq4gJHCdgx1hHy00TQRRmrz0');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                payment_method_types: [
                    'card',
                    'p24',
                    'sepa_debit',
                    'ideal',
                    'bancontact',
                    'sofort',
                    'oxxo',
                    'boleto',
                    'bacs_debit',
                    'giropay',
                    'fpx',
                    'afterpay_clearpay',
                    'eps',
                    'alipay',
                    'grabpay',
                    'wechat_pay',
                    'acss_debit',
                ],
                line_items: [
                    {
                        // TODO: replace this with the `price` of the product you want to sell
                        price: 'price_1J807JFcRooXIbcM1zgbWPy2',
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${req.headers.origin}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/?canceled=true`,
            });

            res.redirect(303, session.url);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
