const Order = require("../model/Order");

const sendEmail = require("../utils/sendEmail");

//create new order
const createOrder = async (req, res) => {
    try {
        const { items, totalAmount, address, paymentId } = req.body;
        if (!items || items.length === 0 || !totalAmount || !address) {
            return res.status(400).json({ message: "Invalid order data" });
        }
        else {
            const order = new Order({
                user: req.user._id,
                items,
                totalAmount,
                address,
                paymentId
            });
            await order.save();

            const message = `Dear ${req.user.name},\n\nYour order has been placed successfully. Order ID: ${order._id}\n\nThank you for shopping with us!`;

            await sendEmail(req.user.email, "Order Confirmation", message );
            res.status(201).json({ message: "Order created successfully", order });
        }
         
    }catch (error) {
            res.status(500).json({ message: error.message });
        }  
};

//my orders
const myOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id }).populate("items.productId", "name price");
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get orders for ADMIN
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).populate("user", "id name");
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
};

//update order status
const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { $set: { status } },
            { new: true, runValidators: true, context: "query" }
        );

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json({ message: "Order status updated successfully", order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createOrder, myOrders, getOrders, updateOrderStatus };