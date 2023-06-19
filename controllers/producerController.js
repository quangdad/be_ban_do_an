const Producer = require("../models/producerModel");

const producerController = {
  // Create a new producer
  create: async (req, res) => {
    try {
      const producer = await Producer.create(req.body);
      res.status(201).json({ message: "Producer created", producer });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Get a list of all producers
  getAll: async (req, res) => {
    try {
      const producers = await Producer.find();
      res.json(producers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get a single producer by ID
  getById: async (req, res) => {
    try {
      const producer = await Producer.findById(req.params.id);
      if (!producer) throw new Error("Producer not found");
      res.json(producer);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  // Update a producer by ID
  updateById: async (req, res) => {
    try {
      const producer = await Producer.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!producer) throw new Error("Producer not found");
      res.json({ message: "Producer updated", producer });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  // Delete a producer by ID
  deleteById: async (req, res) => {
    try {
      const producer = await Producer.findByIdAndDelete(req.params.id);
      if (!producer) throw new Error("Producer not found");
      res.json({ message: "Producer deleted", producer });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

module.exports = producerController;
