"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { useState } from "react";

export default function ProductList({ product }: any) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Grid container spacing={3} sx={{ marginTop: 7 }}>
      {product.map((item: any) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ height: "100%" }}
          >
            <Card
              sx={{
                height: "100%", 
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "box-shadow 0.3s ease", 
                padding: 1,
                "&:hover": {
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)} 
            >

              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={200} 
                padding={'10px'}
                sx={{ overflow: "hidden"  }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }} 
                >

                 <Box sx={{ width: "100%", height: "100%" , border: "1px solid #f8f8f8", borderRadius: 1 }}>
                    <Image
                        width={180}
                        height={180}
                        quality={100}
                        src={item.images && item.images.length > 0 ? item.images[0] : "/placeholder.png"}
                        alt={item.title}
                        className="object-contain"
                    />
                 </Box>   
                </motion.div>
              </Box>

              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6" fontWeight="bold" sx={{ minHeight: 50 }}>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: hoveredCard === item.id ? "unset" : 2, 
                    minHeight: 40,
                    transition: "WebkitLineClamp 0.3s ease", 
                    "&:hover": {
                      WebkitLineClamp: "unset", 
                      overflow: "visible",
                    },
                  }}
                >
                  {item.description}
                </Typography>
                <Typography variant="h6" fontWeight="bold" color="primary" sx={{ mt: 2 }}>
                  ${item.price}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}
