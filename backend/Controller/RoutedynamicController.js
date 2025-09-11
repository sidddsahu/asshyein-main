const DynamicRoute = require("../Module/DynamicModule/DynamicModule");

// Get all routes
exports.getAllRoutes = async (req, res) => {
  try {
    const routes = await DynamicRoute.find().sort({ createdAt: -1 });
    res.json(routes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch routes" });
  }
};

// Create new route
exports.createRoute = async (req, res) => {
  try {
    const { DynamicName, path, element } = req.body;
    const newRoute = new DynamicRoute({ DynamicName, path, element });
    await newRoute.save();
    res.status(201).json(newRoute);
  } catch (err) {
    res
      .status(400)
      .json({ error: "Failed to create route", details: err.message });
  }
};

// Update route
exports.updateRoute = async (req, res) => {
  try {
    const { id } = req.params;
    const { DynamicName, path, element } = req.body;
    const updated = await DynamicRoute.findByIdAndUpdate(
      id,
      { DynamicName, path, element },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Route not found" });
    res.json(updated);
  } catch (err) {
    res
      .status(400)
      .json({ error: "Failed to update route", details: err.message });
  }
};

// Delete route
exports.deleteRoute = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await DynamicRoute.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Route not found" });
    res.json({ message: "Route deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete route" });
  }
};
