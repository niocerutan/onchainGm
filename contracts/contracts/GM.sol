// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title GM
 * @notice A simple onchain "Good Morning" message board.
 *         Anyone can say GM and leave a message on the blockchain forever.
 */
contract GM {
    // --- Events ---
    // Events are like notifications — the frontend listens for these
    event GmSent(address indexed sender, uint256 timestamp, string message);

    // --- Data Structures ---
    // A struct is like a record / object that groups related data
    struct GmEntry {
        address sender;    // who said GM
        uint256 timestamp; // when they said it (Unix time)
        string message;    // their custom message (defaults to "GM!")
    }

    // --- State ---
    GmEntry[] public gms;                        // all GMs ever sent
    mapping(address => uint256) public gmCount;  // how many times each address said GM
    uint256 public totalGms;                     // grand total counter

    // --- Functions ---

    /**
     * @notice Say GM on the blockchain! Optionally add a custom message.
     * @param message  Your custom text, e.g. "GM frens!" (pass "" for default "GM!")
     */
    function sendGm(string calldata message) external {
        string memory finalMessage = bytes(message).length == 0 ? "GM!" : message;

        gms.push(GmEntry({
            sender: msg.sender,
            timestamp: block.timestamp,
            message: finalMessage
        }));

        gmCount[msg.sender]++;
        totalGms++;

        emit GmSent(msg.sender, block.timestamp, finalMessage);
    }

    /**
     * @notice Get the most recent GMs (up to `count`).
     */
    function getRecentGms(uint256 count) external view returns (GmEntry[] memory) {
        uint256 len = gms.length;
        uint256 start = len > count ? len - count : 0;
        uint256 resultLen = len - start;

        GmEntry[] memory recent = new GmEntry[](resultLen);
        for (uint256 i = 0; i < resultLen; i++) {
            recent[i] = gms[start + i];
        }
        return recent;
    }

    /**
     * @notice Get every GM ever sent.
     */
    function getAllGms() external view returns (GmEntry[] memory) {
        return gms;
    }
}
