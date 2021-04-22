import React, { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import data from "./data";
import { IDataItem } from "./interface";
const classifyPoint = require("robust-point-in-polygon");

const dataSets = data.data;
const ratio = window.devicePixelRatio;
const scale = 5;

// 计算中心点坐标
const getCenterPoint = (
  xArray: number[],
  yArray: number[],
  scale: number = 1
) => {
  const maxX = Math.max(...xArray);
  const minX = Math.min(...xArray);
  const maxY = Math.max(...yArray);
  const minY = Math.min(...yArray);
  const centerX = (minX + (maxX - minX) / 2) * scale;
  const centerY = (minY + (maxY - minY) / 2) * scale;

  return [centerX, centerY];
};

const Floorplan = () => {
  // 绘制一个room
  const drawImage = (
    ctx: CanvasRenderingContext2D,
    roomData: IDataItem,
    fillColor = "#d0ddf0",
    strokeColor = "#999"
  ) => {
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;

    let xArray: number[] = [];
    let yArray: number[] = [];
    ctx.beginPath();

    roomData?.boundary?.coordinates?.forEach((coordinate) => {
      ctx.moveTo(coordinate[0][0] * scale, coordinate[0][1] * scale);
      coordinate.forEach((p) => {
        ctx.lineTo(p[0] * scale, p[1] * scale);
        xArray.push(p[0]);
        yArray.push(p[1]);
      });

      ctx.fill();
      ctx.closePath();
      ctx.stroke();
    });

    const centerX = getCenterPoint(xArray, yArray, scale)[0];
    const centerY = getCenterPoint(xArray, yArray, scale)[1];
    ctx.font = "12px serif";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    ctx.strokeText(roomData.room_number, centerX, centerY);
  };

  const clearImage = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    ctx?.clearRect(0, 0, width, height);
  };

  const handleMouseMove = useDebouncedCallback(
    (
      ctx: CanvasRenderingContext2D,
      canvas,
      e: MouseEvent,
      coordinate,
      room: IDataItem
    ) => {
      clearImage(ctx, canvas.width, canvas.height);

      const mousePointX = (e.clientX - canvas.offsetLeft) / scale;
      const mousePointY = (e.clientY - canvas.offsetTop) / scale;

      const insideRoom =
        classifyPoint(coordinate, [mousePointX, mousePointY]) <= 0;
      console.info(mousePointX, mousePointY);
      console.info(coordinate);
      const fillColor = insideRoom ? "orange" : "#d0ddf0";
      dataSets.forEach((room: IDataItem) => {
        drawImage(ctx, room, fillColor);
      });
    },
    200
  );

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas?.getContext("2d");

    if (!canvas) return;
    canvas.width = canvas.width * ratio;
    canvas.height = canvas.height * ratio;

    // 批量绘制room
    if (ctx) {
      dataSets.forEach((room: IDataItem) => {
        drawImage(ctx, room);
        canvas?.addEventListener("mousemove", (e) => {
          handleMouseMove(ctx, canvas, e, room.boundary.coordinates, room);
        });
      });
    }
  }, []);

  return (
    <div className="content">
      <canvas id="bg" width="380" height="240">
        Floorplan
      </canvas>
      <canvas id="currentRoom" width="380" height="240"></canvas>
    </div>
  );
};

export default Floorplan;
