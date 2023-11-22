import { useState, useEffect } from 'react';
import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
} from "@tremor/react";

import "../styles/CandidateTable.css";

const CandidateTable = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/candidate/getall'); // Replace with your actual candidates API endpoint
        if (response.ok) {
          const data = await response.json();
          setCandidates(data);
        } else {
          console.error('Failed to fetch candidates');
        }
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchData();
  }, []);

  const handleVote = async (candidateId) => {
    try {
      const response = await fetch('http://localhost:8080/api/candidate/vote', { // Replace with your actual vote API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          candidateId,
        }),
      });

      if (response.ok) {
        console.log('Vote submitted successfully');
        // You might want to update the UI or state to reflect the vote
      } else {
        console.error('Failed to submit vote');
      }
    } catch (error) {
      console.error('Error submitting vote:', error);
    }
  };

  return (
    <div className="h-[93vh] md:w-[60vw] flex justify-between items-center">
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Party</TableHeaderCell>
              <TableHeaderCell>Ward No</TableHeaderCell>
              <TableHeaderCell>Vote Now</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {candidates.map((candidate) => (
              <TableRow key={candidate.cid}>
                <TableCell>{candidate.name}</TableCell>
                <TableCell>{candidate.party}</TableCell>
                <TableCell>{candidate.wardno}</TableCell>
                <TableCell>
                  <button
                    onClick={() => handleVote(candidate.cid)}
                    className='px-2 py-1 bg-red-400 rounded-lg'
                  >
                    VOTE
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default CandidateTable;
