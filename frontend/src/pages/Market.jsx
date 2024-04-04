import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

export const Market = () => {
  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/requirement/bulk"
        );
        setRequirements(response.data.requirements);
      } catch (error) {
        console.error("Error fetching requirements:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Requirements</CardTitle>
        <CardDescription>
          Recent requirements from organisations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className='bg-red '>
              <TableHead>Volume</TableHead>
              <TableHead>Type</TableHead>
              <TableHead></TableHead> {/* Added Sell column */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {requirements.map((requirement, index) => (
              <TableRow
                key={index}
                className={index % 2 === 0 ? "bg-accent" : ""}
              >
                <TableCell>{requirement.volume}</TableCell>
                <TableCell>{requirement.type}</TableCell>
                <TableCell className="text-right">
                  <button
                    className="bg-lightgreen text-black px-4 py-2 rounded shadow hover:bg-slategray transition-colors duration-300"
                    onClick={() => {
                      axios.put(
                        "http://localhost:3000/requirement/sell",
                        {
                          reqId: requirements[index]._id,
                        },
                        {
                          headers: {
                            authorization: localStorage.getItem("token"),
                          },
                        }
                      );
                    }}
                  >
                    Sell
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
